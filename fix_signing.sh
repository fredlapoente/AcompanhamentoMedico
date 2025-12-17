#!/usr/bin/env bash
set -e

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

TEAM_ID="SSADB2592Z"
PROFILE_NAME="Saudi-AcomMed IOS Dev"
CODE_SIGN_ID="iPhone Developer"

echo "Aplicando assinatura manual no projeto iOS..."

# Forçar assinatura manual
sed -i '' 's/CODE_SIGN_STYLE = Automatic;/CODE_SIGN_STYLE = Manual;/g' "$PROJECT_FILE" || true

# Definir Team ID
sed -i '' "s/DEVELOPMENT_TEAM = .*;/DEVELOPMENT_TEAM = $TEAM_ID;/g" "$PROJECT_FILE"

# Definir provisioning profile
grep -q "PROVISIONING_PROFILE_SPECIFIER" "$PROJECT_FILE" \
  || sed -i '' "/DEVELOPMENT_TEAM = $TEAM_ID;/a\\
				PROVISIONING_PROFILE_SPECIFIER = \"$PROFILE_NAME\";
" "$PROJECT_FILE"

# Definir identidade de assinatura
grep -q "CODE_SIGN_IDENTITY = \"$CODE_SIGN_ID\"" "$PROJECT_FILE" \
  || sed -i '' "/PROVISIONING_PROFILE_SPECIFIER = \"$PROFILE_NAME\";/a\\
				CODE_SIGN_IDENTITY = \"$CODE_SIGN_ID\";
" "$PROJECT_FILE"

echo "Assinatura manual aplicada com sucesso."
