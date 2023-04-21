const deps = [
    {
        name: 'Full Stack',
        subDepartments: [
            {
                name: 'Front End',
                subDepartments: [{
                    name: 'HTML',
                },
                {
                    name: 'CSS',
                    subDepartments: [{
                        name: 'Bootstrap'
                    }],
                },
                {
                    name: 'JavaScript',
                    subDepartments: [{
                        name: 'jQuery',
                    },
                    {
                        name: 'React',
                    }],
                }]
            },
            {
                name: 'Back End',
                subDepartments: [{
                    name: 'C#',
                },
                {
                    name: 'PHP',
                    subDepartments: [{
                        name: 'Laravel',
                    }],
                },
                {
                    name: 'Node JS',
                },
                {
                    name: 'Python',
                    subDepartments: [{
                        name: 'Django'
                    }]
                }]
            }
        ]
    }
];

function rec(departments, parent) {
    departments.forEach(function (department) {

        let id = department.name.toLowerCase().replace(/ /g, '-');
        const currentParrent = typeof (parent) === "undefined" ? "root" : parent;

        $('#' + currentParrent).append(`
            <div id="${id}" class="per">
                <span>${department.name}</span>
            </div>
        `)

        if (typeof (department.subDepartments) === "object") {
            rec(department.subDepartments, id);
        }

    })
}

rec(deps);