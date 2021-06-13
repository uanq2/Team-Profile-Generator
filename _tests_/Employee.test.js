const Employee = require("./../lib/Employee");


describe("Employee class", () => {
    it("Creates an employee object", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(typeof (e)).toBe("object");
    });

    it("Has a id attribute", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.id).toBe(1);
    });

    it("Has a name attribute", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.name).toBe('Uriel');
    });

    it("Has a email attribute", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.email).toBe('ununez@mail.com');
    });

    it("Can get id via getId()", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.getId()).toBe(1);
    });

    it("Can get name via getName()", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.getName()).toBe('Uriel');
    });

    it("Can get email via getEmail()", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.getEmail()).toBe('ununez@mail.com');
    });

    it("Can get role via getRole()", () => {
        const e = new Employee(1, 'Uriel', 'ununez@mail.com');
        expect(e.getRole()).toBe('Employee');
    });
});