using NutritionalKitchen.Domain.Abstractions;
using NutritionalKitchen.Domain.KitchenManager;
using NutritionalKitchen.Domain.Package;
using NutritionalKitchen.Infraestructura.DomainModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutritionalKitchen.Infraestructura.Repositories
{
    internal class PackageRepository : IPackageRepository
    {
        private readonly DomainDbContext _dbContext;

        public PackageRepository(DomainDbContext dbContext)
        {
            _dbContext = dbContext;
        }
         
        public async Task AddAsync(Package entity)
        {
            await _dbContext.Package.AddAsync(entity);
        }

        Task IPackageRepository.DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        Task<Package?> IRepository<Package>.GetByIdAsync(Guid id, bool readOnly)
        {
            throw new NotImplementedException();
        }

        Task IPackageRepository.UpdateAsync(Package package)
        {
            throw new NotImplementedException();
        }
    }
}
