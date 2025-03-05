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

/* flex-objects/layouts/accounts/partials/top.html.twig */
class __TwigTemplate_e733ab7ed7119010710e75499cacc2f5a1b6661cd918feed365f85c2c61539a4 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $context["active_html"] = "class=\"active\"";
        // line 2
        $context["is_configure"] = ($this->getAttribute(($context["route"] ?? null), "gravParam", [0 => ""], "method") === "configure");
        // line 3
        $context["authorize"] = ((($this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.views.configure.authorize"], "method", true, true) &&  !(null === $this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.views.configure.authorize"], "method")))) ? ($this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.views.configure.authorize"], "method")) : (((($this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.configure.authorize"], "method", true, true) &&  !(null === $this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.configure.authorize"], "method")))) ? ($this->getAttribute(($context["directory"] ?? null), "config", [0 => "admin.configure.authorize"], "method")) : ("admin.super"))));
        // line 4
        echo "
";
        // line 5
        if (($context["allowed"] ?? null)) {
            // line 6
            echo "<div class=\"form-tabs\">
    <div class=\"tabs-nav\">
        ";
            // line 8
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(["user-accounts" => "PLUGIN_ADMIN.USERS", "user-groups" => "PLUGIN_ADMIN.GROUPS"]);
            foreach ($context['_seq'] as $context["name"] => $context["title"]) {
                // line 9
                echo "        ";
                $context["current"] = $this->getAttribute(($context["flex"] ?? null), "directory", [0 => $context["name"]], "method");
                // line 10
                echo "        ";
                if ((($context["current"] ?? null) && $this->getAttribute(($context["current"] ?? null), "isAuthorized", [0 => "list", 1 => "admin", 2 => ($context["user"] ?? null)], "method"))) {
                    // line 11
                    echo "        ";
                    $context["active"] = ( !($context["is_configure"] ?? null) && $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->startsWithFilter(($context["nav_route"] ?? null), (twig_trim_filter($this->getAttribute(($context["flex"] ?? null), "adminRoute", [0 => ($context["current"] ?? null)], "method"), "/") . "/")));
                    // line 12
                    echo "        <a ";
                    echo ((($context["active"] ?? null)) ? (($context["active_html"] ?? null)) : (""));
                    echo " href=\"";
                    echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Plugin\Admin\Twig\AdminTwigExtension')->adminRouteFunc($this->getAttribute(($context["flex"] ?? null), "adminRoute", [0 => ($context["current"] ?? null)], "method")), "html", null, true);
                    echo "\">
            <span>";
                    // line 13
                    echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Plugin\Admin\Twig\AdminTwigExtension')->tuFilter($context["title"]), "html", null, true);
                    echo "</span>
        </a>
        ";
                }
                // line 16
                echo "        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['name'], $context['title'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 17
            echo "
        ";
            // line 18
            if (($this->getAttribute(($context["user"] ?? null), "authorize", [0 => ($context["authorize"] ?? null)], "method") || $this->getAttribute(($context["user"] ?? null), "authorize", [0 => "admin.super"], "method"))) {
                // line 19
                echo "        <a ";
                echo ((($context["is_configure"] ?? null)) ? (($context["active_html"] ?? null)) : (""));
                echo " href=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Plugin\Admin\Twig\AdminTwigExtension')->adminRouteFunc("/accounts/configure"), "html", null, true);
                echo "\">
            <span>";
                // line 20
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Plugin\Admin\Twig\AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CONFIGURATION"), "html", null, true);
                echo "</span>
        </a>
        ";
            }
            // line 23
            echo "    </div>
</div>
";
        }
    }

    public function getTemplateName()
    {
        return "flex-objects/layouts/accounts/partials/top.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 23,  89 => 20,  82 => 19,  80 => 18,  77 => 17,  71 => 16,  65 => 13,  58 => 12,  55 => 11,  52 => 10,  49 => 9,  45 => 8,  41 => 6,  39 => 5,  36 => 4,  34 => 3,  32 => 2,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "flex-objects/layouts/accounts/partials/top.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/flex-objects/admin/templates/flex-objects/layouts/accounts/partials/top.html.twig");
    }
}
