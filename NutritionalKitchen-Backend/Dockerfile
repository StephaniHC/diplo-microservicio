# Usa la imagen base de .NET 7.0 SDK para compilar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:5075
ENV ASPNETCORE_ENVIRONMENT=Development
EXPOSE 5075

# Usa la imagen de SDK para compilar la aplicación
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copia los archivos de la solución y restaura las dependencias

COPY ["NutritionalKitchen.sln", "."]
COPY ["NutritionalKitchen.Domain/NutritionalKitchen.Domain.csproj", "NutritionalKitchen.Domain/"]
COPY ["NutritionalKitchen.Application/NutritionalKitchen.Application.csproj", "NutritionalKitchen.Application/"]
COPY ["NutritionalKitchen.Infraestructura/NutritionalKitchen.Infraestructura.csproj", "NutritionalKitchen.Infraestructura/"]
COPY ["NutritionalKitchen.WebApi/NutritionalKitchen.WebApi.csproj", "NutritionalKitchen.WebApi/"]

# Restaura los paquetes NuGet
RUN dotnet restore "./NutritionalKitchen.WebApi/NutritionalKitchen.WebApi.csproj"

# Copia todo el código fuente
COPY . .

# Compila la solución
WORKDIR "/src/NutritionalKitchen.WebApi"
RUN dotnet build "NutritionalKitchen.WebApi.csproj" -c Release -o /app/build

# Publica la aplicación
FROM build AS publish
RUN dotnet publish "./NutritionalKitchen.WebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Crea la imagen final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "NutritionalKitchen.WebApi.dll"]