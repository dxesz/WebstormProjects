class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def move(self):
        return f"{self.brand} {self.model} движется по дороге."

    def info(self):
        return f"Марка: {self.brand}, Модель: {self.model}, Год: {self.year}"

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"Автомобиль {self.brand} {self.model} едет на {self.fuel_type}."

    def honk(self):
        return f"{self.brand} {self.model} сигналит: Би-би!"


class Bike(Vehicle):
    def __init__(self, brand, model, year, bike_type):
        super().__init__(brand, model, year)
        self.bike_type = bike_type

    def move(self):
        return f"Велосипед {self.brand} {self.model} едет с помощью педалей."

    def ring_bell(self):
        return f"{self.brand} {self.model} звонит: Дзинь-дзинь!"

    def info(self):
        return (
            f"Марка: {self.brand}, Модель: {self.model}, "
            f"Год: {self.year}, Тип велосипеда: {self.bike_type}"
        )