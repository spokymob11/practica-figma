import React from "react";
import './navarDesing.css'
const Navbar =() =>{

    return(

         

        <div id="nave">
        <nav> 
        <ul>

        <li><img className="logo" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png" alt="" width='100px' /></li>
        <li><a href="#"> comida fav</a></li>
        <li><a href="#">gustos musicales</a></li>
        <li><a href="#"> hobbies</a></li>
        <li><a href="#">habilidades</a></li>
        
        <li><input type="text" placeholder="buscar" class="buscar" /></li>

        <li><button>iniciar sesion</button></li>
       <li><button>registrarse</button></li>
        </ul>
        </nav>


        </div>



    )


}


export default Navbar