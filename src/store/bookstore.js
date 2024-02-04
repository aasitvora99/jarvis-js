import create from 'zustand';

let useBookStore = create(() => ({
    amount: 40,
    name: 'Prashant'
}));

export { useBookStore };
