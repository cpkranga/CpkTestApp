using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CpkTest.Models;

namespace CpkTest.Models
{
    public class EmployeeDetailContext:DbContext
    {
        public EmployeeDetailContext(DbContextOptions<EmployeeDetailContext> options) : base(options)
        { }

        public DbSet<Employee> EmployeeDetails { get; set; }

        

    }
}
