using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CpkTest.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string FirstName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Gender { get; set; }
        
        [Column(TypeName = "Date")]
        
        public DateTime DOB { get; set; }
        public int DepartmentId { get; set; }

        [NotMapped]
        public string DepName { get; set; }

        /*[NotMapped]
        public List<Department> DepList { get; set; }
        */
        [Column(TypeName = "decimal(18,2)")]
        
        public decimal BasicSalary { get; set; }

        public Employee()
        {
          //  DepList = new List<Department>();
        }
    }
}
