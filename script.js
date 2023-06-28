function fact(num)
{
  const number = parseInt(num);
  if (number < 0) 
  {
    return 0;
  }
  else if (number === 0) 
  {
    return 1;
  }
  else 
  {
    let fact = 1;
    for (i = 1; i <= number; i++) 
    {
        fact *= i;
    }
    return fact;
  }
}
let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == "=")
    {
      let a = document.getElementById("id1").value;
      let m = a.match(/sqr/)
      let f = a.match(/!/)
      let n = a.match(/\d+/g)
      let c = n+m;
      let f1 = n+f
      if (a == c)
      {
        let sqr1 = n*n;
        document.querySelector('input').value = sqr1;
      }else if(a == f1)
        {
          let facto = fact(n);
          document.querySelector('input').value = facto;
        }else
        {
          string = eval(string)
          document.querySelector('input').value = string;
        }
    }else if(e.target.innerHTML == "C")
    {
      string = "";
      document.querySelector('input').value = string;
    }
    else
    {
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})