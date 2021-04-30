yarn build
git add build
echo "Commit Message: "
IFS="" read CommitMessage
echo "$CommitMessage"
git commit -m "$CommitMessag"e
git subtree push --prefix build origin gh-pages
