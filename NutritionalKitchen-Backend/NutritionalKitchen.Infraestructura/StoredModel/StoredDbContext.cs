using Microsoft.EntityFrameworkCore;
using NutritionalKitchen.Infraestructura.StoredModel.Entities;

using System;
using System.Collections.Generic; 
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutritionalKitchen.Infraestructura.StoredModel
{
    internal class StoredDbContext : DbContext
    {
        public DbSet<IngredientsStoredModel> Ingredients { get; set; }
        public DbSet<PackageStoredModel> Package { get; set; }
        public DbSet<KitchenManagerStoredModel> KitchenManager { get; set; }
        public DbSet<LabelStoredModel> Label { get; set; }
        public DbSet<RecipeStoredModel> Recipe { get; set; }

        public StoredDbContext(DbContextOptions<StoredDbContext> options) : base(options)
        {

        }
    }
}
