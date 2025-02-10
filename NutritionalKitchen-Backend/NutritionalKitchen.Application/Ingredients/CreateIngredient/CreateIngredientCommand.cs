using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutritionalKitchen.Application.Ingredients.CreateItem
{
    public record CreateIngredientCommand(Guid id, string name) : IRequest<Guid>;
}
