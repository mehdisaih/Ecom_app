package org.sid.inventoryservice.entities;

import org.sid.inventoryservice.entities.Product;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "productProjection", types = Product.class)
public interface ProductProjection {
    String getName();
    double getPrice();
    int getQuantity();
}
