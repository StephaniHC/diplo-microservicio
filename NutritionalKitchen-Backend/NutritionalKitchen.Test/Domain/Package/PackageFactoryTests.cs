using System;
using Xunit;
using NutritionalKitchen.Domain.Package;

namespace NutritionalKitchen.Test
{
    public class PackageFactoryTests
    {
        [Fact]
        public void Create_ShouldReturnPackage_WhenValidData()
        {
            // Arrange
            var factory = new PackageFactory();
            var id = Guid.NewGuid();
            var status = "Pending";
            var batchCode = "BATCH123";
            var preparedRecipeId = Guid.NewGuid();

            // Act
            var package = factory.Create(id, status, batchCode, preparedRecipeId);

            // Assert
            Assert.NotNull(package);
            Assert.Equal(id, package.Id);
            Assert.Equal(status, package.Status);
        }

        [Fact]
        public void Create_ShouldThrowException_WhenStatusIsEmpty()
        {
            // Arrange
            var factory = new PackageFactory();

            // Act & Assert
            Assert.Throws<ArgumentException>(() =>
                factory.Create(Guid.NewGuid(), "", "BATCH123", Guid.NewGuid()));
        }
    }
}
