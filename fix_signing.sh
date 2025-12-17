#!/usr/bin/env bash
set -e

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

TEAM_ID="SSADB2592Z"
PROFILE_UUID="8085f50e-752e-402d-a5ac-a3cdced46443"

echo "Aplicando assinatura MANUAL (CI-safe)..."

# Limpa qualquer coisa anterior
sed -i '' '/CODE_SIGN_STYLE/d' "$PROJECT_FILE"
sed -i '' '/CODE_SIGN_IDENTITY/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE/d' "$PROJECT_FILE"
sed -i '' '/DEVELOPMENT_TEAM/d' "$PROJECT_FILE"

# Aplica assinatura correta
sed -i '' "s/buildSettings = {/buildSettings = {\n\
DEVELOPMENT_TEAM = $TEAM_ID;\n\
CODE_SIGN_STYLE = Manual;\n\
CODE_SIGN_IDENTITY = \"iPhone Developer\";\n\
PROVISIONING_PROFILE = \"$PROFILE_UUID\";\n/" "$PROJECT_FILE"

echo "Assinatura aplicada com UUID."
