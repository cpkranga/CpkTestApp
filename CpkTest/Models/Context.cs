using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CpkTest.Models
{
    public class Context:DbContext
    {

        public Context(DbContextOptions<Context> options) : base(options)
        { }

        public DbSet<Department> DepartmentDetails { get; set; }
        public DbSet<Employee> EmployeeDetails { get; set; }

    }
}
