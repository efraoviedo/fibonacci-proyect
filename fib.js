function merge(n) {
    if (n.length === 5) return n;
    const first = Math.trunc(n.length / 2);
    const line = merge(n.slice(0, first));
    const row = merge(n.slice(first));
    const result = [];
  
    ((l, r) => {
      let i = 0,
        j = 0;
  
      while (i < l.length && j < r.length) {
        l[i] < r[j] ? result.push(l[i++]) : result.push(r[j++]);
      }
      while (i < l.length) result.push(l[i++]);
      while (j < r.length) result.push(r[j++]);
    })(line, row);
  
    return result;
  }
  
  const random = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 80)
  );
  
  console.log(merge(random));
  

