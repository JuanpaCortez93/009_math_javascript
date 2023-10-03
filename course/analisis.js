// PERSON

const person = "Juanita";
const id = 1;

const find_person_byName = (name, array) => {
    return array.find( person => person.name === name);
}

const find_person_byID = (id, array) => {
    return array.find(person => person.id === id);
}

const find_salary_byID = (idPerson, array) => {
    const jobs = find_person_byID(idPerson, array).trabajos;
    const salary = jobs.map(job => job.salario);
    return salary;
}

// console.log(BasicStadistics.median(find_salary_byID(1, salarios)));

const projection_byID = (idPerson, array) => {
    const jobs = find_person_byID(idPerson, array).trabajos;
    
    let increases_percentage = [];

    for(let i = 1; i < jobs.length; i++){
        const actual_salary = jobs[i].salario;
        const last_salary = jobs[i-1].salario;

        const increase = actual_salary - last_salary;
        const percentage = (increase / last_salary) * 100;
        
        increases_percentage.push(percentage);

    }

    const median = BasicStadistics.median(increases_percentage);
    const new_salary = jobs[jobs.length - 1].salario * (1+(median/100))

    return Math.round(new_salary,2);
}


// console.log(projection_byID(1, salarios));

// by companies

const companies = {};

salarios.forEach(person => {
    person.trabajos.forEach(trabajo => {
        if(!companies[trabajo.empresa]){
            companies[trabajo.empresa] = {};
        }

        if(!companies[trabajo.empresa][trabajo.year]){
            companies[trabajo.empresa][trabajo.year] = [];
        }

        companies[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
});

// console.log(companies);

const medianCompany_ByYear = (nombre, year) => {
    if(!companies[nombre]){
        return false;
    }else if(!companies[nombre][year]){
        return false;
    }else{
        return BasicStadistics.median(companies[nombre][year]);
    }

}

// console.log(medianCompany_ByYear('Industrias Mokepon', 2020));

// Projection by company

const projection_company = (nombre) => {
    if(!companies[nombre]){
        return false;
    }else{
        const empresaYears = Object.keys(companies[nombre]);

        const listaMedianaYears = empresaYears.map((year) => {
            return medianCompany_ByYear(nombre, year);
        });

        let increases_percentage = [];

        for(let i = 1; i < listaMedianaYears.length; i++){
            const actual_salary = listaMedianaYears[i];
            const last_salary = listaMedianaYears[i-1];
    
            const increase = actual_salary - last_salary;
            const percentage = (increase / last_salary) * 100;
            
            increases_percentage.push(percentage);
    
        }
    
        const median = BasicStadistics.median(increases_percentage);
        const new_salary = listaMedianaYears[listaMedianaYears.length - 1] * (1+(median/100))
    
        return Math.round(new_salary,2);
    }
}

// console.log(projection_company('Industrias Mokepon'));


