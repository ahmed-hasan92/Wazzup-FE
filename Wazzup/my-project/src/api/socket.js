import { io } from 'socket.io-client';

const socket = io('http://localhost:7000', {
  autoConnect: true,
});

socket.on('connect', () => {
  console.log('Socket connected:', socket.id);
});

socket.on('disconnect', () => {
  console.log('Socket disconnected');
});

export { socket };
