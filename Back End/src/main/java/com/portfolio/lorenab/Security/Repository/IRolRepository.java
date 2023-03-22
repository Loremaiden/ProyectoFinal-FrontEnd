
package com.portfolio.lorenab.Security.Repository;

import com.portfolio.lorenab.Security.Entity.Rol;
import com.portfolio.lorenab.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Lorena Borrego
 */

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
