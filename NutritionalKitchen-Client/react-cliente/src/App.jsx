
import './App.css'
import IngredientForm from './IngredientForm'
import IngredientPage from './IngredientPage'
import KitchenManagerPage from "./KitchenManagerPage";
import KitchenManagerForm from "./KitchenManagerForm";
import RecipePage from "./RecipePage";
import RecipeForm from "./RecipeForm";
import LabelPage from "./LabelPage";
import PackagePage from "./PackagePage";
import PackageForm from "./PackageForm";

function App() {

  return (
    <>
      <IngredientForm />
      <IngredientPage />
      <KitchenManagerForm />
      <KitchenManagerPage />
      <RecipeForm />
      <RecipePage />
      <LabelPage />
      <PackageForm />
      <PackagePage />
    </>
  )
}

export default App
