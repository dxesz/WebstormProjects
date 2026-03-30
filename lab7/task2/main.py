from models import Vehicle, Car, Bike


def main():
    vehicle = Vehicle("Generic", "Transport", 2020)
    car = Car("Toyota", "Camry", 2022, "бензине")
    bike = Bike("Trek", "Marlin 7", 2023, "горный")

    vehicles = [vehicle, car, bike]

    for item in vehicles:
        print("=" * 40)
        print(item)              # вызывает __str__
        print(item.info())       # общий метод
        print(item.move())       # полиморфизм: у классов работает по-разному

        if isinstance(item, Car):
            print(item.honk())

        if isinstance(item, Bike):
            print(item.ring_bell())


if __name__ == "__main__":
    main()