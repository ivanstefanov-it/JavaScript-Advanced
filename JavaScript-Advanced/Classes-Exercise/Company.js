class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        let args = [name, salary, position, department];
        if (args.some(x => x === '' || x === undefined || x === null) || salary < 0) {
            throw new Error('Invalid input!');
        }

        let employee = {
            name: name,
            salary: Number(salary),
            position: position
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let maxSalary = 0;

        for (const [key, employees] of Object.entries(this.departments)) {
            let currentDepartmentsAvgSalary = this.departments[key].reduce((acc, w) => acc + w.salary, 0) / employees.length;
            // Reach inside for every department's workers
            if (currentDepartmentsAvgSalary > maxSalary) {
                bestDepartment = key;
                maxSalary = currentDepartmentsAvgSalary;
            }
        }

        if (bestDepartment != '') {
            this.departments[bestDepartment].sort((x, y) => y.salary - x.salary || x.name.localeCompare(y.name));

            let output = `Best Department is: ${bestDepartment}\n`;
            output += `Average salary: ${maxSalary.toFixed(2)}\n`;

            for (const worker of Object.values(this.departments[bestDepartment])) {
                output += `${worker.name} ${worker.salary} ${worker.position}\n`;
            }
        
            return output.trim();
        }
    }
}