"user strict";

const user = {
    name: "Михайло",
    age: 48,
    location: "Дніпро",
    email: "misha@example.com",
    phone: "+380123456789",
    
    displayInfo() {
      console.log(`
        Користувач: ${this.name}
        Вік: ${this.age}
        Місце проживання: ${this.location}
        Електронна пошта: ${this.email}
        Телефон: ${this.phone}
      `);
    }
  };
  
  user.displayInfo();