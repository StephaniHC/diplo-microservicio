using NutritionalKitchen.Domain.Abstractions;
using NutritionalKitchen.Domain.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace NutritionalKitchen.Domain.Recipe
{
    public class RecipeIngredient : AggregateRoot
    { 
        public QuantityValue Quantity { get; private set; }
        public string UnitOfMeasure { get; private set; }
        public Guid RecipeId { get; private set; }
        public Guid IngredientId { get; private set; }
        public RecipeIngredient(double quantity, string unitOfMeasure, Guid recipeId, Guid ingredientId) : base(Guid.NewGuid())
        {
            Quantity = quantity;
            UnitOfMeasure = unitOfMeasure;
            RecipeId = recipeId;
            IngredientId = ingredientId;
        }

        public void UpdateQuantity(QuantityValue newQuantity)
        {
            if (newQuantity == null || newQuantity.Value <= 0)
                throw new ArgumentException("La cantidad debe ser mayor a cero.");
            Quantity = newQuantity;
        }

        public void UpdateUnitOfMeasure(string newUnitOfMeasure)
        {
            if (string.IsNullOrWhiteSpace(newUnitOfMeasure))
                throw new ArgumentException("La unidad de medida no puede estar vacía.");
            UnitOfMeasure = newUnitOfMeasure;
        } 

    }
}
