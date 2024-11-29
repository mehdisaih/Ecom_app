package org.sid.customerservices;

import org.sid.customerservices.entities.Customer;
import org.sid.customerservices.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class    CustomerServicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerServicesApplication.class, args);
    }


    @Bean
    public CommandLineRunner commandLineRunner(CustomerRepository customerRepository,
                                               RepositoryRestConfiguration restConfiguration) {
        return args -> {
            restConfiguration.exposeIdsFor(Customer.class);
            customerRepository.saveAll(
                    List.of(
                            Customer.builder().name("Mehdi").email("Mehdi@gmail.com").build(),
                            Customer.builder().name("Moncef").email("Moncef@gmail.com").build(),
                            Customer.builder().name("Hamid").email("Hamid@gmail.com").build()
                    )
            );
            customerRepository.findAll().forEach(c -> {
                System.out.println(c);
            });
        };
    }
}

