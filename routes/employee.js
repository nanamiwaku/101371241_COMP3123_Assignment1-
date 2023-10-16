const express = require("express");
const employeeModel = require('../models/employeeModel'); 
const routes = express.Router();

// Get All Employees
routes.get("/employees", async (req, res) => {
    try {
        const employeeList = await employeeModel.find({});
        res.status(200).send(employeeList);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add NEW Employee
routes.post("/employees", async (req, res) => {
    try {
        const newEmployee = new employeeModel({
            ...req.body
        });
        await newEmployee.save();
        res.status(201).send(newEmployee); // Status 201 for "Created"
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to get an employee by ID
router.get('/employees/{eid}', async (req, res) => {
  const { eid } = req.params.eid;
  try {
      const employee = await Employee.findById(eid);
      if (!employee) {
          return res.status(404).json({ error: 'Employee not found.' });
      }
      res.status(200).json(employee);
  } catch (error) {
      res.status(400).json({ error: 'Failed to fetch the employee.' });
  }
});

// Update existing Employee By Id
routes.put("/employees/:eid", async (req, res) => {
    try {
        const employeeId = req.params.eid;
        const updatedEmployee = await employeeModel.findByIdAndUpdate(employeeId, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send({ message: "Employee not found" });
        }
        res.status(200).send(updatedEmployee);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete Employee By ID
routes.delete("/employees/:eid", async (req, res) => {
    try {
        const employeeId = req.params.eid;
        const deletedEmployee = await employeeModel.findByIdAndRemove(employeeId);
        if (!deletedEmployee) {
            return res.status(404).send({ message: "Employee not found" });
        }
        res.status(204).send(); // Status 204 for "No Content"
    } catch (error) {
        res.status(500).send(error);
    }
});





module.exports = routes;


