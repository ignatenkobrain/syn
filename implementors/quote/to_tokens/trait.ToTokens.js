(function() {var implementors = {};
implementors["syn"] = ["impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Attribute.html' title='struct syn::Attribute'>Attribute</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.MetaItem.html' title='enum syn::MetaItem'>MetaItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.NestedMetaItem.html' title='enum syn::NestedMetaItem'>NestedMetaItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.ConstExpr.html' title='enum syn::ConstExpr'>ConstExpr</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Variant.html' title='struct syn::Variant'>Variant</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.VariantData.html' title='enum syn::VariantData'>VariantData</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Field.html' title='struct syn::Field'>Field</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Visibility.html' title='enum syn::Visibility'>Visibility</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Expr.html' title='struct syn::Expr'>Expr</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.FieldValue.html' title='struct syn::FieldValue'>FieldValue</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Arm.html' title='struct syn::Arm'>Arm</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Pat.html' title='enum syn::Pat'>Pat</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.FieldPat.html' title='struct syn::FieldPat'>FieldPat</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.BindingMode.html' title='enum syn::BindingMode'>BindingMode</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.CaptureBy.html' title='enum syn::CaptureBy'>CaptureBy</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Block.html' title='struct syn::Block'>Block</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Stmt.html' title='enum syn::Stmt'>Stmt</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Local.html' title='struct syn::Local'>Local</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Generics.html' title='struct syn::Generics'>Generics</a>","impl&lt;'a&gt; <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.ImplGenerics.html' title='struct syn::ImplGenerics'>ImplGenerics</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.TyGenerics.html' title='struct syn::TyGenerics'>TyGenerics</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Turbofish.html' title='struct syn::Turbofish'>Turbofish</a>&lt;'a&gt;","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Lifetime.html' title='struct syn::Lifetime'>Lifetime</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.LifetimeDef.html' title='struct syn::LifetimeDef'>LifetimeDef</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.TyParam.html' title='struct syn::TyParam'>TyParam</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.TyParamBound.html' title='enum syn::TyParamBound'>TyParamBound</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.WhereClause.html' title='struct syn::WhereClause'>WhereClause</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.WherePredicate.html' title='enum syn::WherePredicate'>WherePredicate</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.WhereBoundPredicate.html' title='struct syn::WhereBoundPredicate'>WhereBoundPredicate</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.WhereRegionPredicate.html' title='struct syn::WhereRegionPredicate'>WhereRegionPredicate</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.WhereEqPredicate.html' title='struct syn::WhereEqPredicate'>WhereEqPredicate</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Ident.html' title='struct syn::Ident'>Ident</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Item.html' title='struct syn::Item'>Item</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.ViewPath.html' title='enum syn::ViewPath'>ViewPath</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.PathListItem.html' title='struct syn::PathListItem'>PathListItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.TraitItem.html' title='struct syn::TraitItem'>TraitItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.ImplItem.html' title='struct syn::ImplItem'>ImplItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.ForeignItem.html' title='struct syn::ForeignItem'>ForeignItem</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.FnArg.html' title='enum syn::FnArg'>FnArg</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Constness.html' title='enum syn::Constness'>Constness</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Defaultness.html' title='enum syn::Defaultness'>Defaultness</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.ImplPolarity.html' title='enum syn::ImplPolarity'>ImplPolarity</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Crate.html' title='struct syn::Crate'>Crate</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Lit.html' title='enum syn::Lit'>Lit</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Mac.html' title='struct syn::Mac'>Mac</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.TokenTree.html' title='enum syn::TokenTree'>TokenTree</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Delimited.html' title='struct syn::Delimited'>Delimited</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Token.html' title='enum syn::Token'>Token</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.BinOpToken.html' title='enum syn::BinOpToken'>BinOpToken</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.DeriveInput.html' title='struct syn::DeriveInput'>DeriveInput</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.BinOp.html' title='enum syn::BinOp'>BinOp</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.UnOp.html' title='enum syn::UnOp'>UnOp</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Ty.html' title='enum syn::Ty'>Ty</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Mutability.html' title='enum syn::Mutability'>Mutability</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.Path.html' title='struct syn::Path'>Path</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.PathSegment.html' title='struct syn::PathSegment'>PathSegment</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.PathParameters.html' title='enum syn::PathParameters'>PathParameters</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.AngleBracketedParameterData.html' title='struct syn::AngleBracketedParameterData'>AngleBracketedParameterData</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.TypeBinding.html' title='struct syn::TypeBinding'>TypeBinding</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.ParenthesizedParameterData.html' title='struct syn::ParenthesizedParameterData'>ParenthesizedParameterData</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.PolyTraitRef.html' title='struct syn::PolyTraitRef'>PolyTraitRef</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.BareFnTy.html' title='struct syn::BareFnTy'>BareFnTy</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='struct' href='syn/struct.BareFnArg.html' title='struct syn::BareFnArg'>BareFnArg</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Unsafety.html' title='enum syn::Unsafety'>Unsafety</a>","impl <a class='trait' href='quote/to_tokens/trait.ToTokens.html' title='trait quote::to_tokens::ToTokens'>ToTokens</a> for <a class='enum' href='syn/enum.Abi.html' title='enum syn::Abi'>Abi</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
