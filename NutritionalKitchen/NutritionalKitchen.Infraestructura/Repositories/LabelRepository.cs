using NutritionalKitchen.Domain.Abstractions;
using NutritionalKitchen.Domain.Ingredients;
using NutritionalKitchen.Domain.Package;
using NutritionalKitchen.Infraestructura.DomainModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutritionalKitchen.Infraestructura.Repositories
{
    internal class LabelRepository : ILabelRepository
    {
        private readonly DomainDbContext _dbContext;

        public LabelRepository(DomainDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        Task IRepository<Label>.AddAsync(Label entity)
        {
            throw new NotImplementedException();
        }

        Task ILabelRepository.DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        Task<Label?> IRepository<Label>.GetByIdAsync(Guid id, bool readOnly)
        {
            throw new NotImplementedException();
        }

        Task ILabelRepository.UpdateAsync(Label label)
        {
            throw new NotImplementedException();
        }
    }
}
