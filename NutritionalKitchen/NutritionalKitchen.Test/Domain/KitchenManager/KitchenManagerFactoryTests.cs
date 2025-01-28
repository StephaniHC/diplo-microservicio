using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NutritionalKitchen.Domain.KitchenManager;
using Xunit;

namespace NutritionalKitchen.Test
{
    public class KitchenManagerFactoryTests
    {
        [Fact]
        public void Create_ShouldReturnKitchenManager_WhenValidData()
        {
            // Arrange
            var factory = new KitchenManagerFactory();
            var id = Guid.NewGuid();
            var name = "John Doe";
            var shift = "Mañana";

            // Act
            var manager = factory.Create(id, name, shift);

            // Assert
            Assert.NotNull(manager);
            Assert.Equal(id, manager.Id); 
        }
         
         
    }
}
