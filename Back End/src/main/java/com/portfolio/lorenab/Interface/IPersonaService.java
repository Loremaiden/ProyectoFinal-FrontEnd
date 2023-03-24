
package com.portfolio.lorenab.Interface;

import com.portfolio.lorenab.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una persona
    
   public List<Persona> getPersona();
   
   //Guardar un objeto de tipo persona
   
   public void savePersona (Persona persona) ;

    
   //Eliminar usuario
   
   public void deletePersona(Long Id);
   
   //Buscar una persona 
   
   public Persona findPersona(Long Id) ;
   
}
