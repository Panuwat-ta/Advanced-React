// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    // แก้ bug: ตรวจสอบ value ก่อนเก็บลง localStorage
    if (value !== undefined){
    localStorage.setItem(key, JSON.stringify(value));
  }else
    localStorage.removeItem(key)
}, [key, value]);

  return [value, setValue];
}