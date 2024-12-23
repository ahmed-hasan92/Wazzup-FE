import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addToContacts,
  getMyContacts,
  removeFromContacts,
} from '../api/contacts';
import toast from 'react-hot-toast';

const useContact = () => {
  const query = useQueryClient();
  const { mutate: addTo } = useMutation({
    mutationKey: ['ADD_TO_CONTACT'],
    mutationFn: (userId) => addToContacts(userId),
    onSuccess: (data) => {
      query.invalidateQueries('ALL_PROFILES');
      toast.success(`${data}`);
    },
    onError: (error) => {
      toast.error(`${error.response.data}`);
    },
  });

  const { mutate: removeFrom } = useMutation({
    mutationKey: ['REMOVE_FROM_CONTACT'],
    mutationFn: (userId) => removeFromContacts(userId),
    onSuccess: (data, variables) => {
      // Update the cache for MY_CONTACTS
      query.setQueryData(['MY_CONTACTS'], (oldData) => {
        return oldData?.filter((contact) => contact._id !== variables) || [];
      });

      // Optionally refetch both MY_CONTACTS and ALL_PROFILES to ensure consistency
      query.invalidateQueries(['MY_CONTACTS']);
      query.invalidateQueries(['ALL_PROFILES']);

      toast.success(`${data}`);
    },
    onError: (error) => {
      toast.error(`${error.response.data}`);
    },
  });

  const { data: myContacts, isLoading } = useQuery({
    queryKey: ['MY_CONTACTS'],
    queryFn: () => getMyContacts(),
  });

  return { addTo, removeFrom, myContacts, isLoading };
};

export default useContact;
