using NutritionalKitchen.Domain.Ingredients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;


namespace NutritionalKitchen.Test.Domain.Ingredients
{
    public class IngredientFactoryTests
    {
        [Fact]
        public void Create_ShouldThrowException_WhenIdIsEmpty()
        {
            // Arrange
            var factory = new IngredientFactory();
            var id = Guid.Empty;
            var name = "Tomato";

            // Act & Assert
            var exception = Assert.Throws<ArgumentException>(() => factory.Create(id, name));
            Assert.Equal("Id is required (Parameter 'id')", exception.Message);
        }

        [Fact]
        public void Create_ShouldThrowException_WhenNameIsEmpty()
        {
            // Arrange
            var factory = new IngredientFactory();
            var id = Guid.NewGuid();
            var name = "";

            // Act & Assert
            var exception = Assert.Throws<ArgumentException>(() => factory.Create(id, name));
            Assert.Equal("Ingredient name is required (Parameter 'name')", exception.Message);
        }
    }
}
