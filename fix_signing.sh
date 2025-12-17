#!/usr/bin/env bash
set -e

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

TEAM_ID="SSADB2592Z"
PROFILE_NAME="Saudi-AcomMed IOS Dev"
PROFILE_UUID="8085f50e-752e-402d-a5ac-a3cdced46443"

echo "Aplicando assinatura manual completa (com UUID)..."

# Limpa qualquer assinatura anterior
sed -i '' '/CODE_SIGN_STYLE/d' "$PROJECT_FILE"
sed -i '' '/CODE_SIGN_IDENTITY/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE =/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE_SPECIFIER/d' "$PROJECT_FILE"
sed -i '' '/DEVELOPMENT_TEAM/d' "$PROJECT_FILE"

# Injeta assinatura manual correta
sed -i '' 's/buildSettings = {/buildSettings = {\
				CODE_SIGN_STYLE = Manual;\
				CODE_SIGN_IDENTITY = "iPhone Developer";\
				DEVELOPMENT_TEAM = '"$TEAM_ID"';\
				PROVISIONING_PROFILE_SPECIFIER = "'"$PROFILE_NAME"'";\
				PROVISIONING_PROFILE = "'"$PROFILE_UUID"'";\
/g' "$PROJECT_FILE"

echo "Assinatura manual aplicada com UUID."
