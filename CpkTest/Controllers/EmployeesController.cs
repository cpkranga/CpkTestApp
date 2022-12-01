﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CpkTest.Models;

namespace CpkTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        //private readonly EmployeeDetailContext _context;
        private readonly Context _context;


        public EmployeesController(Context context)
        {
            _context = context;
            
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeeDetails()
        {

            var l = (_context.EmployeeDetails.Join(
                    _context.DepartmentDetails,
                    emp => emp.DepartmentId,
                    dep => dep.ID,
                (emp, dep) => new
                {
                    FirstName = emp.FirstName,
                    LastName = emp.LastName,
                    Gender = emp.Gender,
                    DOB = emp.DOB,
                    DepName = dep.DepartmentName,
                    BasicSalary = emp.BasicSalary
                }
                ));

            var l1 = await l.ToListAsync().ConfigureAwait(false);

            return l1
                .Select(r => new Employee()
                {
                    FirstName = r.FirstName,
                    LastName = r.LastName,
                    Gender = r.Gender,
                    DOB = r.DOB,
                    DepName = r.DepName,
                    //DepList = _context.DepartmentDetails.ToList(),
                    BasicSalary = r.BasicSalary
                })
                .ToList();

            //return await _context.EmployeeDetails.ToListAsync();
            //return await l;
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.EmployeeDetails.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.EmployeeDetails.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }


        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.EmployeeDetails.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.EmployeeDetails.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.EmployeeDetails.Any(e => e.Id == id);
        }
    }
}
