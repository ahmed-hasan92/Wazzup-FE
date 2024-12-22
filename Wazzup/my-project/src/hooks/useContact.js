import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToContacts } from '../api/contacts';
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

  return { addTo };
};

export default useContact;
