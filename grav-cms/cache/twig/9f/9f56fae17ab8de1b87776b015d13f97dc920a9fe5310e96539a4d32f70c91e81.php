<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* forms/fields/select/select.html.twig */
class __TwigTemplate_f9b1bc09f61e438b38a694ff587061ac2eb4c4e80feaaf8e6a6854b6bd9bf8db extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'global_attributes' => [$this, 'block_global_attributes'],
            'input' => [$this, 'block_input'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "forms/field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("forms/field.html.twig", "forms/fields/select/select.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_global_attributes($context, array $blocks = [])
    {
        // line 4
        echo "    data-grav-selectize=\"";
        echo twig_escape_filter($this->env, twig_jsonencode_filter((($this->getAttribute(($context["field"] ?? null), "selectize", [], "any", true, true)) ? ($this->getAttribute(($context["field"] ?? null), "selectize", [])) : ([]))), "html_attr");
        echo "\"
    ";
        // line 5
        $this->displayParentBlock("global_attributes", $context, $blocks);
        echo "
";
    }

    // line 8
    public function block_input($context, array $blocks = [])
    {
        // line 9
        echo "    <div class=\"";
        ((($context["form_field_wrapper_classes"] ?? null)) ? (print (twig_escape_filter($this->env, ($context["form_field_wrapper_classes"] ?? null), "html", null, true))) : (print ("form-select-wrapper")));
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "size", []), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "wrapper_classes", []), "html", null, true);
        echo "\">
        <select name=\"";
        // line 10
        echo twig_escape_filter($this->env, ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))) . (($this->getAttribute(($context["field"] ?? null), "multiple", [])) ? ("[]") : (""))), "html", null, true);
        echo "\"
                class=\"";
        // line 11
        echo twig_escape_filter($this->env, ($context["form_field_select_classes"] ?? null), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "classes", []), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "size", []), "html", null, true);
        echo "\"
                ";
        // line 12
        if ($this->getAttribute(($context["field"] ?? null), "id", [], "any", true, true)) {
            echo "id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "id", []));
            echo "\" ";
        }
        // line 13
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "style", [], "any", true, true)) {
            echo "style=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "style", []));
            echo "\" ";
        }
        // line 14
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "disabled", [])) {
            echo "disabled=\"disabled\"";
        }
        // line 15
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "autofocus", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "autofocus=\"autofocus\"";
        }
        // line 16
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "novalidate", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "novalidate=\"novalidate\"";
        }
        // line 17
        echo "                ";
        if (($context["required"] ?? null)) {
            echo "required=\"required\"";
        }
        // line 18
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "multiple", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "multiple=\"multiple\"";
        }
        // line 19
        echo "                ";
        if (($this->getAttribute(($context["field"] ?? null), "disabled", []) || ($context["isDisabledToggleable"] ?? null))) {
            echo "disabled=\"disabled\"";
        }
        // line 20
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "tabindex", [])) {
            echo "tabindex=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "tabindex", []), "html", null, true);
            echo "\"";
        }
        // line 21
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "form", [])) {
            echo "form=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "form", []), "html", null, true);
            echo "\"";
        }
        // line 22
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "autocomplete", [], "any", true, true)) {
            echo "autocomplete=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "autocomplete", []), "html", null, true);
            echo "\"";
        }
        // line 23
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "key", [])) {
            // line 24
            echo "                    data-key-observe=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))), "html", null, true);
            echo "\"
                ";
        }
        // line 26
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "datasets", [])) {
            // line 27
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["field"] ?? null), "datasets", []));
            foreach ($context['_seq'] as $context["datakey"] => $context["datavalue"]) {
                // line 28
                echo "                        data-";
                echo twig_escape_filter($this->env, $context["datakey"], "html", null, true);
                echo "=\"";
                echo twig_escape_filter($this->env, $context["datavalue"], "html_attr");
                echo "\"
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['datakey'], $context['datavalue'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "                ";
        }
        // line 31
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "attributes", [])) {
            // line 32
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["field"] ?? null), "attributes", []));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                // line 33
                echo "                        ";
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo "=\"";
                echo twig_escape_filter($this->env, $context["value"], "html_attr");
                echo "\"
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 35
            echo "                ";
        }
        // line 36
        echo "                >
            ";
        // line 37
        if ($this->getAttribute(($context["field"] ?? null), "placeholder", [])) {
            echo "<option value=\"\" disabled selected>";
            echo $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute(($context["field"] ?? null), "placeholder", []));
            echo "</option>";
        }
        // line 38
        echo "
            ";
        // line 39
        $context["options"] = $this->getAttribute(($context["field"] ?? null), "options", []);
        // line 40
        echo "            ";
        if (($this->getAttribute($this->getAttribute(($context["field"] ?? null), "selectize", []), "create", []) && ($context["value"] ?? null))) {
            // line 41
            echo "              ";
            $context["custom_value"] = (($this->getAttribute(($context["field"] ?? null), "multiple", [])) ? (($context["value"] ?? null)) : ([($context["value"] ?? null) => ($context["value"] ?? null)]));
            // line 42
            echo "              ";
            $context["options"] = array_unique(twig_array_merge(($context["options"] ?? null), ((array_key_exists("custom_value", $context)) ? (_twig_default_filter(($context["custom_value"] ?? null), [])) : ([]))));
            // line 43
            echo "            ";
        }
        // line 44
        echo "
            ";
        // line 45
        $context["value"] = ((twig_test_iterable(($context["value"] ?? null))) ? (($context["value"] ?? null)) : ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(($context["value"] ?? null))));
        // line 46
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["options"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["item_value"]) {
            // line 47
            echo "                ";
            if ((twig_test_iterable($context["item_value"]) && $this->getAttribute($context["item_value"], "value", []))) {
                // line 48
                echo "                    ";
                $context["akey"] = ((($this->getAttribute(($context["field"] ?? null), "selectize", []) && $this->getAttribute(($context["field"] ?? null), "multiple", []))) ? ($context["item_value"]) : ($context["key"]));
                // line 49
                echo "                    ";
                $context["avalue"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute($context["item_value"], "value", []));
                // line 50
                echo "                    <option ";
                echo (($this->getAttribute($context["item_value"], "disabled", [])) ? ("disabled=\"disabled\"") : (""));
                echo "
                        ";
                // line 51
                echo ((($this->getAttribute($context["item_value"], "selected", []) || ($context["key"] == ($context["value"] ?? null)))) ? ("selected=\"selected\"") : (""));
                echo "
                        ";
                // line 52
                (($this->getAttribute($context["item_value"], "label", [])) ? (print (twig_escape_filter($this->env, ("label=" . $this->getAttribute($context["item_value"], "label", [])), "html", null, true))) : (print ("")));
                echo "
                        value=\"";
                // line 53
                echo twig_escape_filter($this->env, ($context["akey"] ?? null), "html", null, true);
                echo "\"
                    >
                        ";
                // line 55
                echo ($context["avalue"] ?? null);
                echo "
                    </option>
                ";
            } elseif (twig_test_iterable(            // line 57
$context["item_value"])) {
                // line 58
                echo "                    ";
                $context["optgroup_label"] = twig_first($this->env, twig_get_array_keys_filter($context["item_value"]));
                // line 59
                echo "                    <optgroup label=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, ($context["optgroup_label"] ?? null)), "html_attr");
                echo "\">
                      ";
                // line 60
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute(($context["field"] ?? null), "options", []), $context["key"], [], "array"), ($context["optgroup_label"] ?? null), [], "array"));
                foreach ($context['_seq'] as $context["subkey"] => $context["suboption"]) {
                    // line 61
                    echo "                          ";
                    $context["subkey"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter($context["subkey"]);
                    // line 62
                    echo "                          ";
                    $context["item_value"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($this->getAttribute(($context["field"] ?? null), "selectize", []) && $this->getAttribute(($context["field"] ?? null), "multiple", []))) ? ($context["suboption"]) : ($context["subkey"])));
                    // line 63
                    echo "                          ";
                    $context["selected"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter((($this->getAttribute(($context["field"] ?? null), "selectize", [])) ? ($context["suboption"]) : ($context["subkey"])));
                    // line 64
                    echo "                          <option ";
                    if ((($context["subkey"] === ($context["value"] ?? null)) || ($this->getAttribute(($context["field"] ?? null), "multiple", []) && twig_in_filter(($context["selected"] ?? null), ($context["value"] ?? null))))) {
                        echo "selected=\"selected\"";
                    }
                    echo " value=\"";
                    echo twig_escape_filter($this->env, $context["subkey"], "html", null, true);
                    echo "\">
                            ";
                    // line 65
                    echo $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["suboption"]);
                    echo "
                          </option>
                      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['subkey'], $context['suboption'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 68
                echo "                    </optgroup>
                ";
            } else {
                // line 70
                echo "                    ";
                $context["val"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($this->getAttribute(($context["field"] ?? null), "selectize", []) && $this->getAttribute(($context["field"] ?? null), "multiple", []))) ? ($context["item_value"]) : ($context["key"])));
                // line 71
                echo "                    ";
                $context["selected"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter((($this->getAttribute(($context["field"] ?? null), "selectize", [])) ? ($context["item_value"]) : ($context["key"])));
                // line 72
                echo "                    <option ";
                if (((($context["val"] ?? null) === ($context["value"] ?? null)) || ($this->getAttribute(($context["field"] ?? null), "multiple", []) && twig_in_filter(($context["selected"] ?? null), ($context["value"] ?? null))))) {
                    echo "selected=\"selected\"";
                }
                echo " value=\"";
                echo twig_escape_filter($this->env, ($context["val"] ?? null), "html", null, true);
                echo "\">";
                echo $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["item_value"]);
                echo "</option>
                ";
            }
            // line 74
            echo "            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['item_value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 75
        echo "
        </select>
    </div>
";
    }

    public function getTemplateName()
    {
        return "forms/fields/select/select.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  332 => 75,  326 => 74,  314 => 72,  311 => 71,  308 => 70,  304 => 68,  295 => 65,  286 => 64,  283 => 63,  280 => 62,  277 => 61,  273 => 60,  268 => 59,  265 => 58,  263 => 57,  258 => 55,  253 => 53,  249 => 52,  245 => 51,  240 => 50,  237 => 49,  234 => 48,  231 => 47,  226 => 46,  224 => 45,  221 => 44,  218 => 43,  215 => 42,  212 => 41,  209 => 40,  207 => 39,  204 => 38,  198 => 37,  195 => 36,  192 => 35,  181 => 33,  176 => 32,  173 => 31,  170 => 30,  159 => 28,  154 => 27,  151 => 26,  145 => 24,  142 => 23,  135 => 22,  128 => 21,  121 => 20,  116 => 19,  111 => 18,  106 => 17,  101 => 16,  96 => 15,  91 => 14,  84 => 13,  78 => 12,  70 => 11,  66 => 10,  57 => 9,  54 => 8,  48 => 5,  43 => 4,  40 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "forms/fields/select/select.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/form/templates/forms/fields/select/select.html.twig");
    }
}
