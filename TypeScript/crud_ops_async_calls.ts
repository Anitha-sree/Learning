import express from 'express';
import bodyParser from 'body-parser'
const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


const router = express.Router();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

router.post('/', (req, res) => {
    const employee = req.body;

    employees.push({ ...employee, id: uuidv4() });

    res.send(`${employee.first_name} has been added to the Database`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundemployee = employees.find((employee) => employee.id === id)

    res.send(foundemployee)
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    employees = employees.filter((employee) => employee.id !== id)

    res.send(`${id} deleted from database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { first_name, last_name, email } = req.body;

    const employee = employees.find((employee) => employee.id === id)

    if (first_name) employee.first_name = first_name;
    if (last_name) employee.last_name = last_name;
    if (email) employee.email = email;

    res.send(`employee with the ${id} has been updated`)

});


