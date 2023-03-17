
package com.portfolio.lorenab.Service;

import com.portfolio.lorenab.Entity.Persona;
import com.portfolio.lorenab.Interface.IPersonaService;
import com.portfolio.lorenab.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepository ipersonarepository; 
    
    @Override
    public List<Persona> getPersona() {
    List<Persona> persona = ipersonarepository.findAll();
    return persona;
    }

    @Override
    public void savePersona(Persona persona) {
       ipersonarepository.save(persona);
    }

    @Override
    public void deletePersona(Long Id) {
        ipersonarepository.deleteById(Id);
        
    }

    @Override
    public Persona findPersona(Long Id) {
       Persona persona = ipersonarepository.findById(Id).orElse(null);
        return persona;
    }

}