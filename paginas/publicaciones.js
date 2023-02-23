document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".modpack__").forEach(modpack =>{
  
            modpack.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?modpack.classList.remove("filtro")
              :modpack.classList.add("filtro")
        })
  
    }
  
  
  })