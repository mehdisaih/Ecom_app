package org.sid.inventoryservice;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ProductRepository productRepository,
                                               RepositoryRestConfiguration restConfiguration) {
        return args -> {
            // Expose explicitement les IDs pour l'entité Product
            restConfiguration.exposeIdsFor(Product.class);

            // Sauvegarde d'une liste de produits avec un constructeur
            productRepository.saveAll(
                    List.of(
                            new Product("Computer", 3200.0, 11),
                            new Product("Printer", 1299.0, 10),
                            new Product("Smart Phone", 5400.0, 8)
                    )
            );

            // Affichage des produits sauvegardés
            productRepository.findAll().forEach(System.out::println);
        };
    }
}
