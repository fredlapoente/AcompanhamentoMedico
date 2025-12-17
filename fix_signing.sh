#!/usr/bin/env bash
set -e

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

TEAM_ID="SSADB2592Z"
PROFILE_NAME="Saudi-AcomMed IOS Dev"

echo "Aplicando assinatura manual no buildSettings..."

# Remove qualquer lixo anterior
sed -i '' '/CODE_SIGN_STYLE/d' "$PROJECT_FILE"
sed -i '' '/CODE_SIGN_IDENTITY/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE/d' "$PROJECT_FILE"
sed -i '' '/DEVELOPMENT_TEAM/d' "$PROJECT_FILE"

# Injeta assinatura manual DENTRO do buildSettings
sed -i '' 's/buildSettings = {/buildSettings = {\
				CODE_SIGN_STYLE = Manual;\
				CODE_SIGN_IDENTITY = "iPhone Developer";\
				DEVELOPMENT_TEAM = '"$TEAM_ID"';\
				PROVISIONING_PROFILE_SPECIFIER = "'"$PROFILE_NAME"'";\
/g' "$PROJECT_FILE"

echo "Assinatura manual aplicada corretamente."
