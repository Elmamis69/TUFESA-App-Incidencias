import boto3

# Especificar la región
region = 'us-east-2'

# Especificar las credenciales de AWS
# Reemplaza 'TU_ACCESS_KEY_ID' y 'TU_SECRET_ACCESS_KEY' con tus propias credenciales de AWS
aws_access_key_id = 'TU_ACCESS_KEY_ID'
aws_secret_access_key = 'TU_SECRET_ACCESS_KEY'

# Crear un cliente de Cognito con la región y las credenciales especificadas
client = boto3.client('cognito-idp', 
                      region_name=region, 
                      aws_access_key_id=aws_access_key_id, 
                      aws_secret_access_key=aws_secret_access_key)

# Llamar a la función AdminSetUserPassword
# Reemplaza 'TU_USER_POOL_ID', 'TU_USERNAME' y 'TU_PASSWORD' con los valores adecuados
response = client.admin_set_user_password(
    UserPoolId='TU_USER_POOL_ID',  # ID del grupo de usuarios en Cognito
    Username='TU_USERNAME',        # Nombre de usuario al que deseas cambiar la contraseña
    Password='TU_PASSWORD',        # Nueva contraseña
    Permanent=True                 # True si la contraseña es permanente, False si es temporal
)

print(response)


