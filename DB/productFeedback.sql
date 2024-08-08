

CREATE TABLE Product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT
);

DROP TABLE Product;

CREATE TABLE Feedback (
    feedback_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

DROP TABLE Feedback;

INSERT INTO Product (product_name, product_description)
VALUES
    ('Laptop', 'High-performance laptop'),
    ('Phone', 'Smartphone with great camera'),
    ('Headphones', 'Noise-canceling headphones');

select *from Product;


INSERT INTO Feedback (product_id, user_id, rating, comment)
VALUES
    (1, 101, 5, 'Excellent laptop'),
    (1, 102, 4, 'Good performance'),
    (2, 101, 4, 'Nice camera'),
    (2, 103, 3, 'Average phone'),
    (3, 102, 5, 'Great sound quality'),
    (3, 103, 2, 'Not comfortable');


SELECT
    p.product_name,
    AVG(f.rating) AS average_rating
FROM
    Product p
JOIN
    Feedback f ON p.product_id = f.product_id
GROUP BY
    p.product_name;


