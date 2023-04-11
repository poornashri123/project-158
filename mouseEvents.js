handleMouseEntervents: function(){
    
    this.el.addEventListenener("mouseenter", () => {
    
    const id = this.el.getAttribute("id") 
    const postersId = [
       "superman",
       "spiderman",
       "captain-aero",
       "outer-space"
    ]
    if (postersTd. includes (id)) {
    
    const postersContainer = document.querySelector("#posters-container");
    postersContainer.setAttribute("cursor-Listener", {selectedItemId : id});
      
    
    this.el.setAttribute("material”, { color:"#1565c0" } );
    }
    });
}