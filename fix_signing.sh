#!/usr/bin/env bash
set -e

echo "Limpando configurações de assinatura em todos os arquivos…"

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

sed -i '' '/CODE_SIGN_STYLE/d' "$PROJECT_FILE"
sed -i '' '/CODE_SIGN_IDENTITY/d' "$PROJECT_FILE"
sed -i '' '/DEVELOPMENT_TEAM =/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE_SPECIFIER/d' "$PROJECT_FILE"

for f in $(find platforms/ios -name "*.xcconfig"); do
    echo "Limpando $f"
    sed -i '' '/CODE_SIGN/d' "$f"
    sed -i '' '/DEVELOPMENT_TEAM/d' "$f"
    sed -i '' '/PROVISIONING_PROFILE/d' "$f"
done

sed -i '' 's/buildSettings = {/buildSettings = {\nDEVELOPMENT_TEAM = SSADB2592Z;\nCODE_SIGN_STYLE = Automatic;/' "$PROJECT_FILE"

echo "Forçando CODE_SIGNING_ALLOWED = YES"
sed -i '' 's/buildSettings = {/buildSettings = {\nCODE_SIGNING_ALLOWED = YES;/' "$PROJECT_FILE"

echo "Finalizado."