using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CpkTest.Models
{
    public class DepartmentDetailContext:DbContext
    {
        public DepartmentDetailContext(DbContextOptions<DepartmentDetailContext> options):base (options)
        { }

        public DbSet<Department> DepartmentDetails { get; set; }
    }


}
