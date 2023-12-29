const Content = () => {

    const randomName = () =>
    {
      const names=['sakshi','smriti','ayana','mihir'];
      const i=Math.floor(Math.random() * 4);
      return names[i];
       
    }
  return (
    
    <main className="content-main">
       <p>
        hello {randomName()} !
       </p>
    </main>
  )
}

export default Content