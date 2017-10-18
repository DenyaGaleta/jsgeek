function pow(x,n) {
  if (n != 1) {
    return x *= pow(x,n - 1); // возводит число в степень (простой пример РЕКУРСИИ)
  } else {
    return x;
  }
}
console.log( pow(3,3));