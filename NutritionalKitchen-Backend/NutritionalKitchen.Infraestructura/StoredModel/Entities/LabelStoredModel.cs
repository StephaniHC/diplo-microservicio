using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutritionalKitchen.Infraestructura.StoredModel.Entities
{
    [Table("label")]
    public class LabelStoredModel
    {
        [Key]
        [Column("batchCode")]
        [StringLength(50)]
        [Required]
        public Guid BatchCode { get; private set; } 

        [Column("productionDate")]
        [Required]
        public DateTime ProductionDate { get; private set; }

        [Column("expirationDate")]
        [Required]
        public DateTime ExpirationDate { get; private set; }

        [Column("detail")]
        [StringLength(500)]
        public string Detail { get; private set; }

        [Column("patientId")]
        [Required]
        public Guid PatientId { get; private set; }

        [Column("address")]
        [StringLength(250)]
        public string Address { get; private set; }
    }
}
