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

/* forms/fields/checkboxes/checkboxes.html.twig */
class __TwigTemplate_558f1e445efc1ff4f5ebf3690b35b3eb59f71ad068007c3dcf796e2a5a06b6ba extends \Twig\Template
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
        $this->parent = $this->loadTemplate("forms/field.html.twig", "forms/fields/checkboxes/checkboxes.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_global_attributes($context, array $blocks = [])
    {
        // line 4
        echo "    ";
        $this->displayParentBlock("global_attributes", $context, $blocks);
        echo "
    data-grav-keys=\"";
        // line 5
        echo ((($this->getAttribute(($context["field"] ?? null), "use", []) == "keys")) ? ("true") : ("false"));
        echo "\"
    data-grav-field-name=\"";
        // line 6
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))), "html", null, true);
        echo "\"
";
    }

    // line 9
    public function block_input($context, array $blocks = [])
    {
        // line 10
        echo "    ";
        $context["value"] = (((null === ($context["value"] ?? null))) ? ($this->getAttribute(($context["field"] ?? null), "default", [])) : (($context["value"] ?? null)));
        // line 11
        echo "    ";
        if ((($this->getAttribute(($context["field"] ?? null), "use", []) == "keys") && $this->getAttribute(($context["field"] ?? null), "default", []))) {
            // line 12
            echo "        ";
            $context["value"] = twig_array_merge($this->getAttribute(($context["field"] ?? null), "default", []), ($context["value"] ?? null));
            // line 13
            echo "    ";
        }
        // line 14
        echo "
        <div class=\"checkboxes ";
        // line 15
        echo twig_escape_filter($this->env, ($context["form_field_wrapper_classes"] ?? null), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "wrapper_classes", []), "html", null, true);
        echo "\">
            ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["field"] ?? null), "options", []));
        foreach ($context['_seq'] as $context["key"] => $context["text"]) {
            // line 17
            echo "                ";
            $context["id"] = (($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->inflectorFilter("hyphen", (($this->getAttribute(($context["field"] ?? null), "id", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["field"] ?? null), "id", []), $this->getAttribute(($context["field"] ?? null), "name", []))) : ($this->getAttribute(($context["field"] ?? null), "name", [])))) . "-") . $context["key"]);
            // line 18
            echo "                ";
            $context["name"] = ((($this->getAttribute(($context["field"] ?? null), "use", []) == "keys")) ? ($context["key"]) : (($context["id"] ?? null)));
            // line 19
            echo "                ";
            $context["val"] = ((($this->getAttribute(($context["field"] ?? null), "use", []) == "keys")) ? ("1") : ($context["key"]));
            // line 20
            echo "                ";
            $context["checked"] = ((($this->getAttribute(($context["field"] ?? null), "use", []) == "keys")) ? ($this->getAttribute(($context["value"] ?? null), $context["key"], [], "array")) : (twig_in_filter($context["key"], ($context["value"] ?? null))));
            // line 21
            echo "                ";
            $context["help"] = ((twig_in_filter($context["key"], twig_get_array_keys_filter($this->getAttribute(($context["field"] ?? null), "help_options", [])))) ? ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "help_options", []), $context["key"], [], "array")) : (false));
            // line 22
            echo "                ";
            $context["disabled"] = twig_in_filter($context["key"], $this->getAttribute(($context["field"] ?? null), "disabled_options", []));
            // line 23
            echo "                <input type=\"checkbox\"
                    id=\"";
            // line 24
            echo twig_escape_filter($this->env, ($context["id"] ?? null));
            echo "\"
                    value=\"";
            // line 25
            echo twig_escape_filter($this->env, ($context["val"] ?? null));
            echo "\"
                    name=\"";
            // line 26
            echo twig_escape_filter($this->env, ((($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))) . "[") . ($context["name"] ?? null)) . "]"), "html", null, true);
            echo "\"
                    class=\"";
            // line 27
            echo twig_escape_filter($this->env, ($context["form_field_checkbox_classes"] ?? null), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "classes", []), "html", null, true);
            echo "\"
                    ";
            // line 28
            if (($context["checked"] ?? null)) {
                echo "checked=\"checked\"";
            }
            // line 29
            echo "                    ";
            if (($context["disabled"] ?? null)) {
                echo "disabled=\"disabled\"";
            }
            // line 30
            echo "                >
                <label style=\"display: inline; ";
            // line 31
            if (($context["disabled"] ?? null)) {
                echo "opacity: 0.6; cursor: no-drop;";
            }
            echo "\" for=\"";
            echo twig_escape_filter($this->env, ($context["id"] ?? null));
            echo "\">
                    ";
            // line 32
            if (($context["help"] ?? null)) {
                // line 33
                echo "                        <span class=\"hint--bottom\" data-hint=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, ($context["help"] ?? null)), "html_attr");
                echo "\">";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["text"]));
                echo "</span>
                    ";
            } else {
                // line 35
                echo "                        ";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["text"]));
                echo "
                    ";
            }
            // line 37
            echo "                </label>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['text'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 39
        echo "        </div>
    
";
    }

    public function getTemplateName()
    {
        return "forms/fields/checkboxes/checkboxes.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  168 => 39,  161 => 37,  155 => 35,  147 => 33,  145 => 32,  137 => 31,  134 => 30,  129 => 29,  125 => 28,  119 => 27,  115 => 26,  111 => 25,  107 => 24,  104 => 23,  101 => 22,  98 => 21,  95 => 20,  92 => 19,  89 => 18,  86 => 17,  82 => 16,  76 => 15,  73 => 14,  70 => 13,  67 => 12,  64 => 11,  61 => 10,  58 => 9,  52 => 6,  48 => 5,  43 => 4,  40 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "forms/fields/checkboxes/checkboxes.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/form/templates/forms/fields/checkboxes/checkboxes.html.twig");
    }
}
